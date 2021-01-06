import ModelGroup from '../models/modelGroup.js';

export const getMessages = async (req,res) => {
    try{
        const group_id = req.params.groupId;
        const group = await ModelGroup.findOne({group_id: group_id});
        const messages = group.messages;
        res.status(200).json(messages);
    } catch (err) {
        res.status(404).json({message: err.message})
    }

}

export const patchMessage = async (req,res,next) => {
    const type = req.body.type;
    const message = req.body.message;
    const sender = req.body.sender;
    const group_id = req.body.group;
    const group = await ModelGroup.findOne({group_id: group_id});
    const oldMessages = group.messages;
    try{
        /*
        {
            type: "add",
            message: "I love you",
            sender: "Best",
            group: "5CvGh"
        }
        {
            type: "delete",
            message: [1,3], (sorted)
            sender: "Best",
            group: "5CvGh"
        }
        {
            type: "edit",
            message: [1], (only one message, declare the number of the message)
            new_message: "I love you so much",
            sender: "Best"
            group: "5CvGh"
        }
        */
        switch(type){
            case "add":
                const newMessage = {message: message, sender: sender};
                // const messages = [...oldMessages, newMessage];
                const resultAdd = await ModelGroup.findOneAndUpdate({group_id: group_id}, {$push: {messages: newMessage}});
                res.status(200).json(resultAdd);
                
                break;

            case "delete":
                for(var i = 0;i<message.length;i++){
                    const index = message[i];
                    oldMessages.splice( index-i, 1);
                }
                const resultDelete = await ModelGroup.findOneAndUpdate({group_id: group_id}, {messages: oldMessages});
                console.log(resultDelete);
                res.status(200).json(resultDelete);
                break;

            case "edit":
                const index = message[0];
                const correct_sender = oldMessages[index].sender;
                if(correct_sender != sender) res.status(400).json({message: "bad request"});
                else{
                    oldMessages[index] = {message: new_message, sender: sender};
                }
                const resultEdit = await ModelGroup.findOneAndUpdate({group_id: group_id}, {messages: oldMessages});
                console.log(resultEdit);
                res.status(200).json(resultEdit);
                break;
            default:
                res.status(400).json({message: "bad request"});
        }
    } catch (err) {
        res.status(409).json({message: err.message})
    }
}