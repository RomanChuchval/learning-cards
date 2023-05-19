import { FormInputValues } from 'features/auth/hooks/useAppForm'
import React from 'react'
import { useModalsForm } from 'common/hooks/useModalsForm'
import { ModalForm } from 'common/components/modals/ModalForm'
import { EditorPacksModal } from 'features/packs/components/modals/EditorPacksModal'

type PacksModalFormPropsType = {
    onSubmit: (data: FormInputValues) => void
    handleClose: () => void
}

export const PacksModalForm: React.FC<PacksModalFormPropsType> = ({ onSubmit, handleClose }) => {
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
                    errors={errors}
                    register={register}
                    packName={modalState.packName}
                />
            </ModalForm>
        </>
    )
}
