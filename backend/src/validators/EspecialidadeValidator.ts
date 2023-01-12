import { celebrate, Segments, Joi } from 'celebrate';

export const storeEspecialidadeValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required()

        }),
    },
    {
        abortEarly: false,
    },
);
