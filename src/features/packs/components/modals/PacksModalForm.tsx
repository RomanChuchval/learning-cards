import React, { memo } from 'react'
import { useModalsForm, ModalForm, FormInputValues } from 'common'
import { EditorPacksModal } from 'features/packs/components/modals/EditorPacksModal'

type PacksModalFormPropsType = {
    onSubmit: (data: FormInputValues) => void
    handleClose: () => void
    img: string
    setImg: (img: string) => void
    defaultImg?: string
}

export const PacksModalForm: React.FC<PacksModalFormPropsType> = memo(
    ({ onSubmit, handleClose, img, setImg, defaultImg }) => {
        const { modalState, errors, register, handleSubmit, onSubmitHandler } = useModalsForm(
            onSubmit,
            ['textInput']
        )

        return (
            <>
                <ModalForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmitHandler}
                    handleClose={handleClose}
                >
                    <EditorPacksModal
                        img={img}
                        setImg={setImg}
                        defaultImg={defaultImg}
                        errors={errors}
                        register={register}
                        packName={modalState.packName}
                    />
                </ModalForm>
            </>
        )
    }
)
