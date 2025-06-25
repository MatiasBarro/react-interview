import logo from '@/assets/logo.png';

export function TopBar() {
  return (
    <div className='container mx-auto border-b border-border py-4'>
      <img src={logo} alt='logo' className='h-8 w-auto' />
    </div>
  );
}
