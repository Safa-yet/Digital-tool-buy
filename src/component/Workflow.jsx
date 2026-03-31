import React from 'react';
import Button from './Common/Button';

const Workflow = () => {
    return (
        <div className="footer py-22 footer-horizontal footer-center linear text-primary-content">
            

  <aside>
    <h1 className="text-3xl md:text-5xl font-bold">
        Ready to Transform Your Workflow?
    </h1>
    <p >
      Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.
      
    </p>
  </aside>
  
  <div className='flex'>
    <Button className=" btn rounded-full" btn='Explore Products' ></Button>
    <Button className='btn btn-outline rounded-full' btn="View Pricing"></Button>
  </div>
    <p>14-day free trial • No credit card required • Cancel anytime</p>

        </div>
    );
};

export default Workflow;