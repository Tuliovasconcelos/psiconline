import { celebrate, Segments, Joi } from 'celebrate';

export const storeAuthValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            senha: Joi.string().required()
        }),
    },
    {
        abortEarly: false,
    },
);