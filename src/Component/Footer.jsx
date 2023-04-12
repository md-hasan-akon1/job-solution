import React from 'react';

const Footer = () => {
    return (
        <>
            <section className=' flex mt-14 justify-evenly w-full bg-black  p-4 text-gray-400'>
                <div className='  '>
                    <h1 className='text-3xl font-bold mb-4 text-white'>Job Solutions</h1>
                    <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <div className='flex items-center mt-4'>
                        <img className='h-6' src="https://i.ibb.co/F7p1jKC/Facebook-logo.png" alt="" />
                        <img className='h-6 ' src="https://i.ibb.co/3vRpZhX/3938028.png" alt="" />
                        <img className='h-6 mx-4' src="https://i.ibb.co/mqF8xLY/instragram.png" alt="" />
                    </div>
                </div>
                <div className='  '>
                    <h1 className='text-3xl font-bold mb-4 text-white'>Company</h1>
                    <p>About Us</p>
                    <p> Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className=' '>
                    <h1 className='text-3xl font-bold mb-4 text-white'>Product</h1>
                    <p>Prototype </p>
                    <p> Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-4 text-white'>Support</h1>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div> <h1 className='text-3xl font-bold mb-4 text-white'>Contact</h1>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                    </div>
            </section>
        </>
    );
};

export default Footer;