import { Tabs, Tab } from 'react-bootstrap';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ExpenseTracker from './components/ExpenseTracker';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Tabs defaultActiveKey='main' className='mb-3'>
        <Tab eventKey='main' title='About Me'>
          <MainContent />
        </Tab>
        <Tab eventKey='expenses' title='Expense Tracker'>
          <ExpenseTracker />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
};

export default App;
