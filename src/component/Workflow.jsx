import React from 'react';
import Button from './Common/Button';

const Workflow = () => {
    return (
        <div className=''>
            
            <footer className="footer py-22 footer-horizontal footer-center bg-primary text-primary-content">
  <aside>
    <h1 className="text-5xl font-bold">
        Ready to Transform Your Workflow?
    </h1>
    <p >
      Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.
      
    </p>
  </aside>
  
  <div className='flex'>
    <Button className=" btn btn-lg rounded-full" ></Button>
    <Button className='btn btn-lg btn-outline rounded-full'></Button>
  </div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
</footer>
        </div>
    );
};

export default Workflow;