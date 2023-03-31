-- Create conversations table
CREATE TABLE conversations (
  conversation_id SERIAL PRIMARY KEY,
  conversation_name VARCHAR(100) NOT NULL
);

-- Create messages table
CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  conversation_id INTEGER NOT NULL REFERENCES conversations(conversation_id),
  sender_id INTEGER NOT NULL REFERENCES users(user_id),
  recipient_id INTEGER NOT NULL REFERENCES users(user_id),
  message_text TEXT NOT NULL,
  send_time TIMESTAMP DEFAULT NOW(),
  delivery_time TIMESTAMP,
  read_time TIMESTAMP
);

-- Create user status table
CREATE TABLE user_status (
  user_id INTEGER NOT NULL REFERENCES users(user_id),
  conversation_id INTEGER NOT NULL REFERENCES conversations(conversation_id),
  online BOOLEAN DEFAULT FALSE,
  last_seen TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (user_id, conversation_id)
);


-- Insert a conversation
INSERT INTO conversations (conversation_name)
VALUES ('Group Chat 1');

-- Insert some messages
INSERT INTO messages (conversation_id, sender_id, recipient_id, message_text)
VALUES 
(1, 1, 2, 'Hello Jane!'),
(1, 2, 1, 'Hi John! How are you?');

-- Insert user statuses
INSERT INTO user_status (user_id, conversation_id, online)
VALUES (1, 1, true),
(2, 1, true);

-- Update user status
UPDATE user_status
SET online = false, last_seen = NOW()
WHERE user_id = 1 AND conversation_id = 1;

SELECT * FROM conversations;
SELECT * FROM messages;

-- retrieve a list of conversations a user is a part of, including the conversation name and the other participants
SELECT conversations.conversation_name, users.username AS participant_username
FROM conversations
JOIN messages ON conversations.conversation_id = messages.conversation_id
JOIN users ON messages.sender_id = users.user_id OR messages.recipient_id = users.user_id
WHERE users.user_id = 1;

-- retrieve the messages in a particular conversation between two users
SELECT messages.message_id, messages.message_text, messages.send_time, messages.delivery_time, messages.read_time
FROM messages
JOIN conversations ON messages.conversation_id = conversations.conversation_id
WHERE conversations.conversation_name = 'conversation_name' AND (messages.sender_id = 1 OR messages.recipient_id = 1) AND (messages.sender_id = 2 OR messages.recipient_id = 2)
ORDER BY messages.send_time ASC;