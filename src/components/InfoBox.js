import Notification from 'rsuite/Notification';

const InfoBox = ({ title, children }) => (
  <Notification type="info" header={title}>
    { children }
  </Notification>
);

export default InfoBox;
