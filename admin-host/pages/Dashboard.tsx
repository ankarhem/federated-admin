import React, { Suspense } from 'react';

const LazyButton = React.lazy(() => import('admin_remote/Button'));

function Dashboard() {
  return (
    <>
      <h1 className='text-4xl'>Dashboard</h1>
      <Suspense fallback={'Loading ...'}>
        <LazyButton />
      </Suspense>
    </>
  );
}

export default Dashboard;
