<h1>For Complete Documentation Click below link</h1>
<a href="https://drive.google.com/file/d/1XqnWRWi0ZbXwuRfxRhf6q4wq5bK8Z7UO/view">Documentation</a>

<h1>Automatic Deadline Notification System</h1>

<p>This project is a MERN (MongoDB, Express, React, Node) stack-based web application integrated with an LSTM model to automatically detect deadlines in chat conversations and notify users in real-time.</p>

<h2>Features</h2>
<ul>
  <li><strong>Real-time Messaging:</strong> Users can communicate via the chat interface.</li>
  <li><strong>Automatic Deadline Detection:</strong> The LSTM model detects messages with deadlines and triggers notifications.</li>
  <li><strong>Notification System:</strong> Alerts appear in-app when a deadline is identified, ensuring no deadlines are missed.</li>
  <li><strong>Seamless Integration:</strong> The app is designed for a smooth user experience with real-time updates.</li>
</ul>

<h2>Technology Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React.js: For building the user interface.</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js & Express.js: Server-side logic and API endpoints.</li>
</ul>

<h3>Database</h3>
<ul>
  <li>MongoDB: Storing user conversations.</li>
</ul>

<h3>Machine Learning</h3>
<ul>
  <li>LSTM (Long Short-Term Memory) model: Detects time-sensitive messages.</li>
</ul>

<h2>Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Ensure you have the following installed:</li>
  <li><strong>Node.js</strong> (v14 or above)</li>
  <li><strong>MongoDB</strong> (set up locally or using MongoDB Atlas)</li>
  <li><strong>Python</strong> (for the LSTM model integration)</li>
</ul>

<h3>Steps to Run the Project</h3>

<ol>
  <li><strong>Clone the Repository</strong>
    <pre><code>git clone https://github.com/yourusername/automatic-deadline-notification.git
cd automatic-deadline-notification
    </code></pre>
  </li>

  <li><strong>Install Dependencies</strong>
    <pre><code>cd client
npm install
    </code></pre>
    <pre><code>cd ../server
npm install
    </code></pre>
  </li>

  <li><strong>Set Up Environment Variables</strong>
    <p>Create a <code>.env</code> file in the root directory of the <code>server</code> and add the following:</p>
    <pre><code>MONGO_URI=your_mongodb_connection_string
PORT=5000
    </code></pre>
  </li>

  <li><strong>Run the Application</strong>
    <ul>
      <li><strong>Start the Client:</strong></li>
      <pre><code>cd client
npm start
      </code></pre>
      <li><strong>Start the Server:</strong></li>
      <pre><code>cd ../server
npm start
      </code></pre>
    </ul>
    <p>The app should now be running on <code>http://localhost:3000</code> (React frontend) and <code>http://localhost:5000</code> (Node.js backend).</p>
  </li>
</ol>

<h2>LSTM Model Integration</h2>
<p>The LSTM model is used to analyze chat messages for potential deadlines. It is implemented using Python and TensorFlow.</p>

<ol>
  <li><strong>Set Up Python Environment:</strong>
    <pre><code>pip install tensorflow pandas numpy scikit-learn pymongo
    </code></pre>
  </li>

  <li><strong>Run the LSTM Model:</strong>
    <p>The model will analyze the chat messages stored in MongoDB and trigger notifications based on deadline detection.</p>
  </li>
</ol>

<h2>Testing</h2>

<ol>
  <li><strong>Unit Testing:</strong> React Testing Library is used for testing UI components.
    <pre><code>npm test
    </code></pre>
  </li>

  <li><strong>Integration Testing:</strong> Backend API tests are done using Postman or any preferred tool.</li>
</ol>

<h2>Folder Structure</h2>

<pre><code>
automatic-deadline-notification/
├── client/          # React frontend
├── server/          # Node.js backend
└── model/           # LSTM model
</code></pre>

<h2>Future Enhancements</h2>
<ul>
  <li>Integration with other messaging platforms (Telegram, Slack).</li>
  <li>Improved NLP techniques for more accurate deadline detection.</li>
  <li>User-customized notification settings.</li>
</ul>

