import React from 'react'
import { CardsModalForm } from 'features/modals/components/cards-modals/CardsModalForm'
import { PacksModalForm } from 'features/modals/components/packs-modals/PacksModalForm'
import { RemoveModal } from 'features/modals/components/common/RemoveModal'
import { RemoveModalMessage } from 'features/modals/components/common/RemoveModalMessage'
import { AppModal } from 'features/modals/components/common/AppModal'
import { useAppModals } from 'features/modals/hooks/useAppModals'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'

export const AppModals = () => {
    const {
        isModalOpen,
        modalAction,
        modalConfig,
        handleClose,
        cardQuestion,
        cardQuestionImg,
        packName,
        packCover,
        withRedirect,
    } = useAppModals()
    const { createCard, updateCard, removeCard } = useEditorCards()
    const { createPack, updatePack, removePack, img, setImg } = useEditorPack(
        packCover,
        withRedirect
    )

    return (
        <AppModal title={modalConfig.title} open={isModalOpen} handleClose={handleClose}>
            {modalAction === 'createPack' && (
                <PacksModalForm
                    onSubmit={createPack}
                    handleClose={handleClose}
                    img={img}
                    setImg={setImg}
                />
            )}
            {modalAction === 'updatePack' && (
                <PacksModalForm
                    onSubmit={updatePack}
                    handleClose={handleClose}
                    img={img}
                    setImg={setImg}
                    defaultImg={packCover}
                />
            )}
            {modalAction === 'removePack' && (
                <RemoveModal
                    modalTitle={modalConfig}
                    handleClose={handleClose}
                    onRemove={removePack}
                >
                    <RemoveModalMessage
                        entityName={packName}
                        entityImage={packCover}
                        whatToDelete={'This pack'}
                    />
                </RemoveModal>
            )}
            {modalAction === 'createCard' && (
                <CardsModalForm onSubmit={createCard} handleClose={handleClose} />
            )}
            {modalAction === 'updateCard' && (
                <CardsModalForm onSubmit={updateCard} handleClose={handleClose} />
            )}
            {modalAction === 'removeCard' && (
                <RemoveModal
                    modalTitle={modalConfig}
                    handleClose={handleClose}
                    onRemove={removeCard}
                >
                    <RemoveModalMessage
                        entityName={cardQuestion}
                        entityImage={cardQuestionImg}
                        whatToDelete={'This card'}
                    />
                </RemoveModal>
            )}
        </AppModal>
    )
}
