import Joi from 'joi';

const schemas={
    add: Joi.object().keys({
        id:Joi.number().required(),
        firstName: Joi.string().min(3).max(99).required(),
        lastName:Joi.string().min(3).max(99).required(),
    
        
    }),
    list: Joi.object().keys({
        id:Joi.number().required(),
        firstName: Joi.string().min(3).max(99),
        lastName:Joi.string().min(3).max(99),
        

    })
};
export default schemas;
