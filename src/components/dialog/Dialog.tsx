"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import styles from './dialog.module.scss'
import Link from 'next/link'

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
}

export default function Dialog({ title, onClose, onOk, children }: Props) {

    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')

    useEffect(() => {
        if (showDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    const dialog: JSX.Element | null = showDialog === 'y'
        ? (
            <dialog ref={dialogRef} className={styles.dialog}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.dialogContent}>
                    {children}
                    <Link href={"/catalog/"}>
                        <button
                            onClick={clickOk}
                            className={styles.okButton}>
                                OK
                        </button>
                    </Link>
                </div>    
                
                
            </dialog>
        ) : null


    return dialog
}