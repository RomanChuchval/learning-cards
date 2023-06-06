import React from 'react'
import { BackTo, paths } from 'common'
import Grid from '@mui/material/Grid'
import { CardsHeader } from 'features/cards/components/cards/CardsHeader'
import { CardsFilter } from 'features/cards/components/cards/CardsFilter'
import { CardsTable } from 'features/cards/components/cards/CardsTable'
import { CardsModalForm } from 'features/modals/components/cards-modals/CardsModalForm'
import { AppModal } from 'features/modals/components/common/AppModal'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { RemoveModalMessage } from 'features/modals/components/common/RemoveModalMessage'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { PacksModalForm } from 'features/modals/components/packs-modals/PacksModalForm'
import { useAppModals } from 'features/modals/hooks/useAppModals'
import { RemoveModal } from 'features/modals/components/common/RemoveModal'

export const Cards = () => {
    const {
        isModalOpen,
        modalAction,
        modalTitle,
        handleClose,
        cardQuestion,
        cardQuestionImg,
        packName,
        packCover,
    } = useAppModals()
    const { createCard, updateCard, removeCard } = useEditorCards()
    const { removePack, updatePack, img, setImg } = useEditorPack(packCover)
    const onRemovePack = () => removePack(true)

    return (
        <>
            <BackTo link={paths.PACKS} text={'Back to Packs List'} />
            <Grid container spacing={2} sx={{ mt: '1px' }} rowSpacing={5}>
                <CardsHeader />
                <CardsFilter>
                    <CardsTable />
                </CardsFilter>
            </Grid>
            <AppModal title={modalTitle} open={isModalOpen} handleClose={handleClose}>
                {modalAction === 'createCard' && (
                    <CardsModalForm onSubmit={createCard} handleClose={handleClose} />
                )}
                {modalAction === 'updateCard' && (
                    <CardsModalForm onSubmit={updateCard} handleClose={handleClose} />
                )}
                {modalAction === 'popoverUpdatePack' && (
                    <PacksModalForm
                        onSubmit={updatePack}
                        handleClose={handleClose}
                        img={img}
                        setImg={setImg}
                        defaultImg={packCover}
                    />
                )}
                {modalAction === 'removeCard' && (
                    <RemoveModal
                        handleClose={handleClose}
                        onRemove={removeCard}
                        modalTitle={modalTitle}
                    >
                        <RemoveModalMessage
                            entityName={cardQuestion}
                            whatToDelete={'This card'}
                            entityImage={cardQuestionImg}
                        />
                    </RemoveModal>
                )}
                {modalAction === 'popoverRemovePack' && (
                    <RemoveModal
                        handleClose={handleClose}
                        onRemove={onRemovePack}
                        modalTitle={modalTitle}
                    >
                        <RemoveModalMessage entityName={packName} whatToDelete={'This pack'} />
                    </RemoveModal>
                )}
            </AppModal>
        </>
    )
}
