import Image from 'next/image';
import payment from '../assets/common/payment.png';
import shipping from '../assets/common/shipping.png';
import apple from '../assets/common/apple.png';
import google from '../assets/common/google.png';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='bg-blue text-white-100 text-[14px]'>
			{/* DELIVERY FEATURES STARTS*/}
			<div className='border-b border-gray-100'>
				<div className='container m-auto block md:flex md:justify-between py-2 md:divide-x divide-gray-100'>
					<div className='flex gap-4 items-center px-3 py-2'>
						<img src='/assets/svg/shipping.svg' alt='Free shipping' />
						<div>
							<p className='font-semibold pb-1'>Free Shipping</p>
							<p className='text-white-300'>Enjoy free shipping for</p>
						</div>
					</div>
					<div className='flex gap-2 items-center px-3 py-2'>
						<img src='/assets/svg/operator.svg' alt='Customer support' />
						<div>
							<p className='font-semibold pb-1'>24/7 Support</p>
							<p className='text-white-300'>We're always here to help</p>
						</div>
					</div>
					<div className='flex gap-2 items-center px-3 py-2'>
						<img src='/assets/svg/cash.svg' alt='Money back' />
						<div>
							<p className='font-semibold pb-1'>Online Payment</p>
							<p className='text-white-300'>Pay online anytime!</p>
						</div>
					</div>
					<div className='flex gap-2 items-center px-3 py-2'>
						<img src='/assets/svg/delivery.svg' alt='Delivery man' />
						<div>
							<p className='font-semibold pb-1'>Fastest Delivery</p>
							<p className='text-white-300'>We're just 12 hours away!</p>
						</div>
					</div>
				</div>
			</div>
			{/* DELIVERY FEATURES ENDS*/}

			{/* LINKS STARTS */}
			<div className='border-b border-gray-100'>
				<div className='container m-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div className='grid grid-cols-2 gap-6 px-3'>
            <div>
              <p className='text-white-100 hover:text-white-300 font-semibold uppercase'>Our stores</p>

              <div className='flex flex-col gap-3 my-3 text-white-300'>
                <Link className='hover:text-white-100' href='/'>Dhaka North</Link>
                <Link className='hover:text-white-100' href='/'>New York</Link>
                <Link className='hover:text-white-100' href='/'>London SF</Link>
                <Link className='hover:text-white-100' href='/'>East Berlin</Link>
                <Link className='hover:text-white-100' href='/'>Washington</Link>
                <Link className='hover:text-white-100' href='/'>Cox's Bazar</Link>
              </div>
            </div>
            <div>
              <p className='text-white-100 hover:text-white-300 font-semibold uppercase'>Useful links</p>
              <div className='flex flex-col gap-3 my-3 text-white-300'>
                <Link className='hover:text-white-100' href='/'>Dhaka North</Link>
                <Link className='hover:text-white-100' href='/'>New York</Link>
                <Link className='hover:text-white-100' href='/'>London SF</Link>
                <Link className='hover:text-white-100' href='/'>East Berlin</Link>
                <Link className='hover:text-white-100' href='/'>Washington</Link>
                <Link className='hover:text-white-100' href='/'>Cox's Bazar</Link>
              </div>
            </div>
          </div>
					<div className='grid grid-cols-2 gap-6 px-3'>
            <div>
              <p className='text-white-100 hover:text-white-300 font-semibold uppercase'>Our stores</p>
              <div className='flex flex-col gap-3 my-3 text-white-300'>
                <Link className='hover:text-white-100' href='/'>Dhaka North</Link>
                <Link className='hover:text-white-100' href='/'>New York</Link>
                <Link className='hover:text-white-100' href='/'>London SF</Link>
                <Link className='hover:text-white-100' href='/'>East Berlin</Link>
                <Link className='hover:text-white-100' href='/'>Washington</Link>
                <Link className='hover:text-white-100' href='/'>Cox's Bazar</Link>
              </div>
            </div>
            <div>
              <p className='text-white-100 hover:text-white-300 font-semibold uppercase'>Useful links</p>
              <div className='flex flex-col gap-3 my-3 text-white-300'>

                <Link className='hover:text-white-100' href='/'>Privacy Policy</Link>
                <Link className='hover:text-white-100' href='/'>Returns</Link>
                <Link className='hover:text-white-100' href='/'>Terms & Conditions</Link>
                <Link className='hover:text-white-100' href='/'>Contact Us</Link>
                <Link className='hover:text-white-100' href='/'>Latest News</Link>
                <Link className='hover:text-white-100' href='/'>Our Sitemap</Link>
              </div>
            </div>
          </div>
					<div className='grid grid-cols-1 px-3'>
          <p className='text-white-100 hover:text-white-300 font-semibold uppercase py-2'>Available on:</p>
          <div className='grid grid-cols-2 gap-6'>
            <Image className='rounded-lg' src={apple} width={200} alt='Apple store'/>
            <Image className='rounded-lg' src={google} width={200} alt='Google play store'/>
          </div>
          <p className='py-2 font-medium'>Join our newsletter!</p>
          <p className='text-white-300 py-1'>Will be used in accordance with our <Link href='/' className='text-yellow-200'>Privacy Policy</Link></p>

          <form className='py-2'>
            <input className='bg-blue p-2 focus:outline-none border border-white-200 w-[50%]' type="email" placeholder='Your email address' />
            <input className='bg-yellow-300 p-2 border border-yellow-200 w-[30%]' type="submit" value="Subscribe" />
          </form>
          </div>
				</div>
			</div>
			{/* LINKS ENDS */}

			{/* PAYMENT & SOCIAL STARTS */}
			<div className='p-3 container m-auto flex flex-col md:flex-row md: justify-between gap-3 text-[18px]'>
				<div>
					<p className='font-semibold mb-2'>Payment System:</p>
					<Image src={payment} alt='Payment system' />
				</div>
				<div>
					<p className='font-semibold mb-2'>Shipping System:</p>
					<Image src={shipping} alt='Shipping system' />
				</div>
				<div>
					<p className='font-semibold mb-2'>Our Social Links:</p>
					<Image src={payment} alt='Shipping with' />
				</div>
			</div>
			{/* PAYMENT & SOCIAL ENDS */}

			{/* FOOTER BOTTOM STARTS */}
			<p className='text-center py-2 border-t border-gray-100'>
				Next Commerce © 2023 Created With 💝 By{' '}
				<Link
					href='https://www.highestsoft.com'
					target='_blank'
					className='text-yellow-300 text-[20px] font-bold underline'
				>
					Highest Soft
				</Link>
			</p>
			{/* FOOTER BOTTOM ENDS */}
		</footer>
	);
};

export default Footer;
