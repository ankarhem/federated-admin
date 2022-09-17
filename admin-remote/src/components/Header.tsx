import clsx from 'clsx';
import gravatarUrl from 'gravatar-url';

const Header = ({ className }: { className?: string }) => {
  const user = {
    name: 'Jakob Ankarhem',
    email: 'jakob.ankarhem@norce.io',
  };

  const context = {
    merchant: 'wiberg',
    channel: '1',
    culture: 'sv-SE',
  };

  return (
    <header className={clsx(className, 'bg-base-100 shadow-md')}>
      <button className='btn btn-circle btn-xs btn-outline mx-2'>?</button>
      <label className='btn btn-circle btn-xs btn-outline swap swap-rotate mx-2'>
        <input type='checkbox' />
        <span className='swap-off'>%</span>
        <span className='swap-on line-through text'>%</span>
      </label>
      <button className='btn btn-circle btn-xs mx-2 bg-cover bg-center bg-[url(data:image/gif;base64,R0lGODlhFwAPAIAAAP/EDSx0qSH5BAAHAP8ALAAAAAAXAA8AAAIkjB+gyM0KnHxrWmhvzQ5zCIbiSJbmKXYbR0Vs471ILBt0fUsFADs=)]' />
      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='btn btn-ghost no-animation gap-2'>
          <div className='avatar'>
            <div className='w-10 rounded-full ring-1 ring-base-content'>
              <img
                src={gravatarUrl(user.email)}
                alt={`Picture of ${user.name}`}
                className='w-auto h-full pointer-events-none'
                loading='lazy'
                height={32}
                width={32}
              />
            </div>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <span className='block'>{user.name}</span>
            <span className='block text-sm font-normal'>
              {context.merchant} ({context.channel})
            </span>
          </div>
        </label>
        <ul
          tabIndex={0}
          className='menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4'
        >
          <li className='menu-title'>
            <span>Wiberg</span>
          </li>
          <li>
            <a>Channel 1</a>
          </li>
          <li>
            <a>Channel 2</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
