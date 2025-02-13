import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<
    { person: string; amount: number }[]
  >([]);
  const [amount, setAmount] = useState('');
  const [person, setPerson] = useState('David');

  const addExpense = () => {
    if (!amount) return;
    console.log('Adding expense:', { person, amount: parseFloat(amount) });
    setExpenses([...expenses, { person, amount: parseFloat(amount) }]);
    setAmount('');
  };

  console.log('Current expenses:', expenses);

  const totalDavid = expenses
    .filter((e) => e.person === 'David')
    .reduce((sum, e) => sum + e.amount, 0);
  const totalFatima = expenses
    .filter((e) => e.person === 'Fatima')
    .reduce((sum, e) => sum + e.amount, 0);
  const balance = totalFatima - totalDavid;

  console.log('Total David:', totalDavid);
  console.log('Total Fatima:', totalFatima);
  console.log('Balance:', balance);

  return (
    <div className='p-3'>
      <Card>
        <Card.Body>
          <h2 className='text-center'>Expense Tracker</h2>
          <Form className='mb-3 d-flex gap-2'>
            <Form.Control
              type='number'
              placeholder='Enter amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Form.Select
              value={person}
              onChange={(e) => setPerson(e.target.value)}
            >
              <option value='David'>David</option>
              <option value='Fatima'>Fatima</option>
            </Form.Select>
            <Button onClick={addExpense}>Add</Button>
          </Form>
          <table className='table table-bordered'>
            <thead>
              <tr className='table-primary'>
                <th>David</th>
                <th>Fatima</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.person === 'David' ? expense.amount : ''}</td>
                  <td>{expense.person === 'Fatima' ? expense.amount : ''}</td>
                </tr>
              ))}
              <tr className='table-secondary'>
                <td>Total: {totalDavid.toFixed(2)}€</td>
                <td>Total: {totalFatima.toFixed(2)}€</td>
              </tr>
            </tbody>
          </table>
          <div className='mt-3 text-center fw-bold'>
            {balance > 0
              ? `David owes Fatima ${balance.toFixed(2)}€`
              : balance < 0
              ? `Fatima owes David ${Math.abs(balance).toFixed(2)}€`
              : 'No one owes anything!'}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExpenseTracker;
