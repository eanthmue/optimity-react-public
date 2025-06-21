import { useParams, NavLink } from 'react-router-dom';
import dbData from "../data/db.json";
import imageDI from "./../assets/images/Design and Implementation.png"

const ServiceDetails = () => {

    const imageDesign = imageDI;
    const { id } = useParams();
    const service = dbData.services.find(s => s.id === id);

    return ( <>

    <section>
    {!service ? (
    <div>Service not found</div>
    ) : (<>

    <div className="p-6 md:p-10 bgcoralwhitepink">
    
        <div className='grid gird-col-1 md:grid-cols-2 gap-8'>
            <div className=' place-items-center text-center place-content-center'>
            <div className="!font-light text-3xl md:!text-4xl lg:!text-5xl underline md:no-underline text-center mb-4">We can help you with</div>
            <div className='mb-4 text-xl md:underline'>{service.title}</div>
                {service.description.split('\n\n').map((paragraph, index) => (
                    <>
                        <p key={index} className='text-justify text-base md:text-xl font-medium'>{paragraph}</p>
                        <br />
                    </>
                ))}
                <NavLink to="/news" className="mybutton !w-full hidden md:block md:!w-auto text-center">Explore Further</NavLink>
            </div>
            <div className="pt-6">
                <img className="rounded-xl shadow-lg" src={imageDesign} alt="" />
                <NavLink to="/news" className="mybutton !w-full block md:hidden md:!w-auto text-center">Explore Further</NavLink>
            </div>
            
            

        </div>
        
        
        
    </div>

    </>
    )}
    </section>

    </> );
}
 
export default ServiceDetails;