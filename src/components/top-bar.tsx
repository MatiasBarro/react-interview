import logo from '@/assets/logo.png';

export function TopBar() {
  return (
    <div className='border-b border-border'>
      <div className='container mx-auto py-4'>
        <img src={logo} alt='logo' className='h-8 w-auto' />
      </div>
    </div>
  );
}
