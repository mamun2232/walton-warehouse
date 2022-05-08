import React from 'react';
import { Accordion } from 'react-bootstrap';
import PageTitle from '../../Utilitis/PageTitle/PageTitle';


const Blogs = () => {
      return (
            <div className="blog-section my-5">
                  <PageTitle title='Blog'></PageTitle>

                  <div className="container">
                        <h3>Question Anser</h3>
                        <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                    <Accordion.Header>Difference between javascript and nodejs?</Accordion.Header>
                                    <Accordion.Body>
                                          <p className='read-text'>  JavaScript হলো একটি সাধারণ প্রোগ্রামিং ভাষা যা যেকোনো ব্রাউজারে JavaScript ইঞ্জিন চালিয়ে থাকে। সাধারণত জাভাস্ক্রিপ্ট ব্যবহার করা হয় ক্লাইন্ট সাইটে ওয়েভ ব্রাউজারে। এই ছাড়া জাভাস্ক্রিপ্ট বাউজারে সিনকুনাস ভাবে রান হয়ে থাকে।</p>
                                          <p className='read-text'>
                                          অপর দিকে Node js কোনো পোগ্রামিং ভাষা না। নোড যে এস হচ্ছে জাভাস্ক্রিপ্ট এর  এসেনকুনাস এভেন্ট ড্রাইবেন রানটাইম। অর্থাৎ নুড যেএস এর মাধ্যমে খুব সহজে ক্লাইনেট সাইট থেকে সার্ভার সাইটে কমিনিকিউশন করা যায়। অর্থাৎ নোড জিএস দিয়ে সার্ভারে কাজ করা হয়।
                                          </p>
                                  


                                    </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                    <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                                    <Accordion.Body>
                                          <p className='read-text'>সমাধানত নোড জিএস ব্যবহার করা হয় সার্ভার সাইটে। সার্ভার সাইটে কোনো অপারেশন চালানোর জন্য নোড জি এস ব্যবহার করা হয়।</p>
                                          <p className='read-text'>mongodb হলো একটি Nonsql ডাটাবেইজ। এটির মাধ্যমে ডাটা সেইভ করে রাখা হয়। কোনো ডাটা সেইভ করে রাখার জন্য অথবা ডাটা বেইজে ডাটা পাঠানোর জন্য crod অপারেশন করা হয়ে থাকে।</p>
                                    


                                    </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                    <Accordion.Header>Differences between sql and nosql databases.?</Accordion.Header>
                                    <Accordion.Body>
                                          <li className='read-text'>
                                          এসকিউএল ডাটাবেসগুলি সম্পর্কযুক্ত, নোএসকিউএল ডেটাবেসগুলি সম্পর্কযুক্ত না।
                                          </li>

                                          <li className='read-text'>
                                          SQL ডাটাবেস স্ট্রাকচার্ড কোয়েরি ভাষা ব্যবহার করে এবং একটি পূর্বনির্ধারিত স্কিমা আছে। NoSql ডাটাবেসে অসংগঠিত ডেটার জন্য গতিশীল স্কিমা রয়েছে।
                                          </li>

                                          <li className='read-text'>
                                          Sql ডাটাবেসগুলি টেবিল-ভিত্তিক। অর্থাৎ টেবিল আকারে ডাটা গুলো রাখা হয়।
 Nosql ডাটাবেসগুলি অনেকটা জাভাস্ক্রিপ্ট অব্জেক্ট এর মত।
                                          </li>
                                        </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                    What is the purpose of jwt and how does it work?

                                    </Accordion.Header>
                                    <Accordion.Body>

                                          <p className='read-text'> জোসন ওয়েভ টোকেন এর মাধ্যমে ইউজারের ডাটা সিকিউর করা হয়। প্রতিটা ইউজারের ডাটা সিকিউর রাখা খুব গুরুত্বপূর্ণ। এর জন্য এটি ব্যবহার করা হয়।</p>
                                          <p className='read-text'>
                                          এটি সাধারণত একটি টোকেন জেনারেট করে ইউজার যখন প্রথম বার লগিন করে। তারপর ইউজার যখন কোনো কিছু সার্ভারে পোষ্ট করে তখন সেই টোকেন চ্যাক করে। যদি টোকেন মিলে যায় তখন ইউজারকে পোষ্ট করতে দেওয়া হয়। এই ছাড়া এটির ফলে অন্য জনের ডাটা এক্সসেস করা যায় না।
                                          </p>
                                    
                                    </Accordion.Body>
                              </Accordion.Item>
                        </Accordion>
                  </div>
            </div>
      );
};

export default Blogs;