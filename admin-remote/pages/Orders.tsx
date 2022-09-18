import { LoaderFunction, useLoaderData } from 'react-router-dom';

const LIMIT = 20;
const baseUrl = `https://phoenix-ordermanagement-service.test.jetshopcloud.io/api/v0/checkout`;

export const loader: LoaderFunction = ({ request, params }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');

  return fetch(`${baseUrl}/orders?offset=${page * LIMIT}&limit=${LIMIT}`, {
    headers: {
      'x-merchant': 'wiberg',
      'x-channel': '1',
    },
  });
};

function Orders() {
  const { data } = useLoaderData() as any;
  console.log(data);
  return (
    <>
      <h1 className='text-4xl mb-4'>Orders</h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Modified</th>
              <th>ID</th>
              <th>Total</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order: any) => {
              return (
                <tr className='hover'>
                  <th>{order.lastModified}</th>
                  <td>{order.id}</td>
                  <td>{order.cart.total.includingVat}</td>
                  <td className='uppercase'>{order.state.orderStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
