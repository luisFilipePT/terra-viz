import Notification from 'rsuite/Notification';

const InfoBox = ({ title, children }) => (
  <div style={{ zIndex: 1000, position: 'relative'}}>
    <Notification type="info" header={title}>
      { children }
    </Notification>
  </div>
);

export default InfoBox;
