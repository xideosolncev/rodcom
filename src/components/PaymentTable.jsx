/**
 * Payment matrix: rows = children, columns = events.
 * Props:
 *  - members:  array from members.json
 *  - events:   array of { id, title } from fund.json
 *  - payments: { [memberId]: { [eventId]: 'paid' | 'unpaid' } }
 */
export default function PaymentTable({ members, events, payments }) {
  return (
    // The wrapper scrolls horizontally on narrow screens.
    <div className="table-wrap">
      <table className="payment-table">
        <thead>
          <tr>
            <th scope="col">Child</th>
            {events.map((e) => (
              <th key={e.id} scope="col">{e.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <th scope="row">
                <img src={m.icon} alt="" className="payment-table__avatar" />
                {m.name}
              </th>
              {events.map((e) => {
                // Missing data is treated as unpaid.
                const paid = payments[m.id]?.[e.id] === 'paid';
                return (
                  <td key={e.id}>
                    <span className={`badge ${paid ? 'badge--paid' : 'badge--unpaid'}`}>
                      {paid ? '✓ Paid' : '✕ Unpaid'}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
