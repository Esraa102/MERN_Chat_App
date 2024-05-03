import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

const sendMessage = async (req, res, next) => {
  const { _id: senderId } = req.user;
  const { receiverId } = req.params;
  const { message } = req.body;
  try {
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // SOKET IO FUNCTONALITY WILL BE HERE
    await conversation.save();
    res.status(201).json({ status: "OK", messageData: newMessage });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: error.message });
  }
};

const getMessages = async (req, res, next) => {
  const { id: userToChatId } = req.params;
  const { _id: senderId } = req.user;
  try {
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages"); // to get the messages objects from the conversation document

    if (!conversation) {
      return res.status(200).json({ status: "OK", messages: [] });
    } else {
      res.status(200).json({ status: "OK", messages: conversation.messages });
    }
  } catch (error) {
    return res.status(500).json({ status: "Error", message: error.message });
  }
};

export { sendMessage, getMessages };
