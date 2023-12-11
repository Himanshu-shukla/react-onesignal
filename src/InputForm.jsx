import React, { useState, useEffect } from 'react';
import './InputForm.css';
import OneSignal  from 'react-onesignal';


const InputForm = () => {
  const [gameName, setGameName] = useState('');
  const [gameResult, setGameResult] = useState('');

  const handleGameNameChange = (e) => {
    setGameName(e.target.value);
  };

  const handleGameResultChange = (e) => {
    setGameResult(e.target.value);
  };

  useEffect(() => {
    // Initialize OneSignal
    OneSignal.init({
      appId: '468e322b-f2bd-461a-aa77-dde3a5e5cc46',
      safari_web_id: 'web.onesignal.auto.66c89079-ab76-4c24-84be-2fca07f56f6c',
      notifyButton: {
        enable: true,
      },
    });

    window.addEventListener('OneSignal.notificationDisplay', (event) => {
        console.log('OneSignal notification displayed:', event);
      });

  }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any actions with the form data here

//     OneSignal.sendTags({key: "value", key2: "value2"});

//      // Initialize OneSignal
//     OneSignal.push(() => {
//         OneSignal.init({
//             appId: '468e322b-f2bd-461a-aa77-dde3a5e5cc46', // Replace with your OneSignal App ID
//             safari_web_id: 'web.onesignal.auto.66c89079-ab76-4c24-84be-2fca07f56f6c',
//             notifyButton: {
//             enable: true,
//             },
//         });
//     });

//     // Send a notification
//     OneSignal.push(() => {
//         OneSignal.createNotification({
//           contents: {
//             en: `New Form Submission: ${gameName} - ${gameResult}`,
//           },
//           include_player_ids: ['hhimanshu030@gmail.com'], // Replace with the actual user/player ID
//         });
//     });

//     // Clear form fields after submission
//     setGameName('');
//     setGameResult('');

//     console.log('Game Name:', gameName);
//     console.log('Game Result:', gameResult);
//   };

  const handleSendNotification = () => {
    // Send a notification
    OneSignal.sendNotification({
      contents: { en: 'New Form Submission' },
      include_player_ids: ['hhimanshu030@gmail.com'],
    });
  };

  return (
    <div className="input-form-container">
      <form >
        <label>
          Game Name:
          <input
            type="text"
            value={gameName}
            onChange={handleGameNameChange}
            required
          />
        </label>
        <br />
        <label>
          Game Result:
          <input
            type="text"
            value={gameResult}
            onChange={handleGameResultChange}
            required
          />
        </label>
        <br />
        <button onClick={handleSendNotification}>Send Notification</button>
      </form>
    </div>
  );
};

export default InputForm;
