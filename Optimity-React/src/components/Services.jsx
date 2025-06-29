import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

import dbData from "../data/db.json";

const Services = () => {

  const services = dbData.services;
  

  return (
    <section className="text-center">
      <h3 className="mb-4">Our Services</h3>

      <div className="grid grid-cols-auto-fit gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center ">
        {services.map((service) => (
          <NavLink key={service.id} to={`/services/${service.id}`}>
            <div className="text-center px-4 py-6 bgtransparent">
              <Icon
                className="text-5xl mb-4 mx-auto"
                icon={service.icon}
              />
              <h4 className="!text-center mb-4 line-clamp-2">{service.title}</h4>
              <p className="text-left line-clamp-5 !text-xl">{service.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
      
    </section>
  );
};

export default Services;
