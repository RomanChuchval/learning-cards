import React, { FC, useState } from 'react'
import { ImageUpload } from 'common/components/image-upload/ImageUpload'
import { Control, UseFormRegister } from 'react-hook-form/dist/types/form'
import { FormInputValues } from 'common/hooks/useAppForm'

type ImageFormatModalPropsType = {
    register: UseFormRegister<FormInputValues>
    questionImg: string
    answerImg: string
    control: Control<FormInputValues>
}
export const ImageFormatModal: FC<ImageFormatModalPropsType> = ({
    register,
    questionImg,
    answerImg,
}) => {
    const [questionPreview, setQuestionPreview] = useState<string | null>(null)
    const [answerPreview, setAnswerPreview] = useState<string | null>(null)
    const getDisplayedImage = (preview: string | null, image: string) => {
        if (preview) {
            return preview
        } else if (image === ' ') {
            return null
        } else {
            return image
        }
    }
    const displayedQuestionImage = getDisplayedImage(questionPreview, questionImg)
    const displayedAnswerImage = getDisplayedImage(answerPreview, answerImg)

    return (
        <>
            <ImageUpload
                title={'Question'}
                register={register}
                inputName={'questionImg'}
                img={displayedQuestionImage}
                setPreviewState={setQuestionPreview}
            />
            <ImageUpload
                title={'Answer'}
                register={register}
                inputName={'answerImg'}
                img={displayedAnswerImage}
                setPreviewState={setAnswerPreview}
            />
        </>
    )
}
