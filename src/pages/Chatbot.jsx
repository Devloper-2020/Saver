// UtilitySaverChat.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, User, Bot, Send } from "lucide-react";

export default function UtilitySaverChat() {
  const [open, setOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startChat = () => {
    setChatStarted(true);
    setMessages([
      {
        text: "Hi there! I'm your Utility Saver assistant. Ask me anything about saving on energy, broadband, or your monthly bills.",
        sender: "bot",
      },
    ]);
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input.trim(), sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          text: data.reply || "Sorry, I couldn't get a response.",
          sender: "bot",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble responding right now.",
          sender: "bot",
        },
      ]);
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-full z-50 ml-4 sm:ml-0">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[90vw] sm:w-80 max-h-[90vh] h-[36rem] bg-white dark:bg-gray-800 shadow-xl rounded-xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="text-white" size={20} />
                <h2 className="font-semibold text-white">Utility Saver</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} className="cursor-pointer" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-green-50 dark:bg-gray-900/50">
              {!chatStarted ? (
                <div className="h-full flex flex-col justify-center items-center text-center p-6">
                  <Bot className="mb-4 text-green-500" size={40} />
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Welcome to Utility Saver
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Let’s help you save smarter! Click below to start chatting.
                  </p>
                  <button
                    onClick={startChat}
                    className="py-2 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
                  >
                    Start Chat
                  </button>
                </div>
              ) : (
                <>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${
                        msg.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg p-3 ${
                          msg.sender === "user"
                            ? "bg-green-600 text-white rounded-br-none"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {msg.sender === "user" ? (
                            <User className="mt-0.5" size={16} />
                          ) : (
                            <Bot className="mt-0.5" size={16} />
                          )}
                          <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[85%] rounded-lg p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                        <div className="flex items-center gap-2 italic text-gray-500 dark:text-gray-400">
                          <Bot size={16} />
                          <p>Typing...</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {chatStarted && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-800">
                <div className="flex items-end gap-2">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your utility-saving question..."
                    rows={1}
                    className="flex-1 max-h-24 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    disabled={loading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    className={`p-2 rounded-lg ${
                      input.trim() && !loading
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                    } transition-colors`}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 rounded-full shadow-lg flex items-center justify-center ${
          open
            ? "bg-gray-600"
            : "bg-gradient-to-r from-green-600 to-emerald-500"
        } text-white cursor-pointer`}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
