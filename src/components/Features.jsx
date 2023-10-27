import featuredImg from '../assets/undraw_professor_re_mj1s.svg'
import featuredImg1 from '../assets/exm.svg'
import featuredImg2 from '../assets/people.svg'
import { Link } from 'react-router-dom';

const Features = () => {

  const card=[
    {path:"exam"}
  ]

  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10" >
        <div className="lg:w-1/4"data-aos="fade-up-right">
            <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">What manily you can do here</h3>
            <p className="text-base text-tartiary">You can view new applicants details and you can accepat them and you can view new drivinhg lisnece schools and you can accept them or ignore them. And also in the Exam section you can condut and handle the exam</p>
        </div>
        {/*Featured cards */}
        <div className="w-full lg:w-4/4" >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <div>
                    <img src={featuredImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Schools</h5>
                </div>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer md:mt-16'data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
                <div>
                    <img src={featuredImg1} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'><a href='exam' path='exam'>Exam</a></h5>
                </div>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer 'data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
                <div>
                    <img src={featuredImg2} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>New Applicants</h5>
                </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;