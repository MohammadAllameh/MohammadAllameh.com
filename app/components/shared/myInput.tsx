import { ErrorMessage, Field, useField, useFormikContext } from 'formik'
import { useTranslation } from "react-i18next";

import { ChangeEvent, FC } from "react";

import { ExclamationCircleIcon, CheckIcon } from '@heroicons/react/20/solid'

import '../../../styles/color/index.css'

interface Props {
    lable: string,
    inputClassName?: string,
    errorClassName?: string,
    lableClassName?: string,
    id?: string,
    inputName: string,
    type?: string,
    autoComplete?: string,
    placeholder?: string,
    as?: string,
    onChange?: (e: ChangeEvent) => void
}

const MyInput: FC<Props> = ({
    lable, lableClassName,
    id, inputName, type = "text", autoComplete, placeholder, inputClassName,
    errorClassName, as, onChange, ...props
}) => {
    const [field, meta] = useField(inputName);
    const { t, i18n } = useTranslation('footer')

    return (
        <div>
            <label htmlFor={inputName} className={`${lableClassName ?? ''} block text-sm font-medium active-color`}>
                {lable}
            </label>
            <div className="relative mt-1 rounded-md shadow-sm flex ">
                <Field {...props} as={as} placeholder={placeholder} id={id} name={inputName} type={type} autoComplete={autoComplete} className={`${inputClassName ?? ''} w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-sm`} />

                    {meta.touched && meta.error ? (
                        <div className={`pointer-events-none absolute inset-y-0 ${i18n.dir(i18n.language) === 'rtl' ? 'left-0 pl-1' : 'right-0 pr-1'} flex items-center pr-1`}>
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                        </div>
                    ) : meta.touched && !meta.error ? (
                        <div className={`pointer-events-none absolute inset-y-0 ${i18n.dir(i18n.language) === 'rtl' ? 'left-0 pl-1' : 'right-0 pr-1'} flex items-center pr-1`}>
                            <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                        </div>
                    ) : null}

            </div>



            <ErrorMessage name={inputName} className={`${errorClassName ?? ''} mt-2 text-sm text-red-600`} component='p' />
        </div>
    )
}

export default MyInput;