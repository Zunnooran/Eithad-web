import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import Button from 'components/core-ui/button/button';
import Heading from 'components/core-ui/heading/heading';

import EmailIcon from 'assets/icons/email-svgrepo-com.svg?react';
import LocationIcon from 'assets/icons/location-sign-svgrepo-com.svg?react';
import PhoneIcon from 'assets/icons/phone-svgrepo-com.svg?react';

const data = [
  {
    icon: <LocationIcon />,
    heading: 'Address',
    text: '1234 Main Street, Anytown, CA 12345',
  },
  {
    icon: <PhoneIcon />,
    heading: 'Phone',
    text: '0xxx-xxxxxxx',
  },
  {
    icon: <EmailIcon />,
    heading: 'Email',
    text: 'rana@yopmail.com',
  },
];

function ContactUs() {
  const onFormLayoutChange = () => {};
  return (
    <div id='contact'>
      <Heading className='flex flex-centered' heading='Contact Us' />
      {/* <div className='flex bg-slate-500 p-12'> */}
      <div className='flex md:flex-row flex-col gap-4 my-8'>
        <div className='flex flex-col gap-4 md:w-2/5 w-full'>
          {data.map((d) => (
            <div
              key={d.heading}
              className='flex md:flex-col flex-row md:justify-center justify-start items-center md:gap-2 gap-4'
            >
              <div className='flex flex-col flex-centered'>
                <div className='w-8 h-8'> {d.icon} </div>
                <h2 className='md:text-base text-sm'>{d.heading}</h2>
              </div>
              <p className='max-w-40 md:text-base text-sm'>{d.text}</p>
            </div>
          ))}
        </div>
        <div className='md:border-r-2 border-b-2 border-[#2d2d2d]' />
        <div className='w-full'>
          <Form
            layout='horizontal'
            onValuesChange={onFormLayoutChange}
            // style={{ maxWidth: 600 }}
            className='w-full md:p-5'
          >
            <Form.Item>
              <Input placeholder='First Name' />
            </Form.Item>
            <Form.Item>
              <Input placeholder='Last Name' />
            </Form.Item>
            <Form.Item>
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item>
              <TextArea rows={4} placeholder='write your query here!' />
            </Form.Item>
            <Form.Item>
              <Button className='md:py-2 py-1 md:px-8'>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
