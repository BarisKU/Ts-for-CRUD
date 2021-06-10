import Joi from 'joi';

const schemas={
    add: Joi.object().keys({
        name: Joi.string().min(3).max(99).required(),
        lastName:Joi.string().min(3).max(99).required(),
        number:Joi.string().min(3).max(99).required(),
        luckyNumber:Joi.number().integer().required(),//for update example
        
    }),
    list: Joi.object().keys({
        name: Joi.string().min(3).max(99),
        lastName:Joi.string().min(3).max(99),
        number:Joi.string().min(3).max(99),
        luckyNumber: Joi.number().integer()

    })
};
export default schemas;