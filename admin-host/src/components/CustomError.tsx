type CustomErrorProps = {
  statusCode: 500 | 404;
};

const CustomError = ({ statusCode }: CustomErrorProps) => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl'>{statusCode}</h1>
        <span className='divider divider-horizontal'></span>
        <h2>
          {statusCode === 404 ? 'Page Not Found' : 'Internal Server Error'}
        </h2>
      </div>
    </div>
  );
};

export const NotFound = () => <CustomError statusCode={404} />;
