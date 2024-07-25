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
      <div className='flex gap-4 my-8'>
        <div className='flex flex-col gap-4 w-2/5'>
          {data.map((d) => (
            <div key={d.heading} className='flex flex-col flex-centered gap-2'>
              <div className='w-8 h-8'> {d.icon} </div>
              <h2>{d.heading}</h2>
              <p className='max-w-40'>{d.text}</p>
            </div>
          ))}
        </div>
        <div className='border-r-2 border-[#2d2d2d]' />
        <div className='w-full'>
          <Form
            layout='horizontal'
            onValuesChange={onFormLayoutChange}
            // style={{ maxWidth: 600 }}
            className='w-full p-5'
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
              <Button className='py-2 px-8'>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
