import { useCallback, useEffect, useRef } from 'react'

import type { AdController, ShowPromiseResult } from '~/types/adsgram'

export interface useAdsgramParams {
  blockId: string
  onReward: () => void
  onError?: (result: ShowPromiseResult) => void
}

export function useAdsgram({
  blockId,
  onReward,
  onError
}: useAdsgramParams): () => Promise<void> {
  const AdControllerRef = useRef<AdController | undefined>(undefined)

  useEffect(() => {
    AdControllerRef.current = window.Adsgram?.init({
      blockId,
      debug: true,
      debugBannerType: 'FullscreenMedia'
    })
  }, [blockId])

  // useEffect(() => {
  //   if (!window.Adsgram) {
  //     onError?.({
  //       error: true,
  //       done: false,
  //       state: 'init',
  //       description: 'Adsgram script is not available'
  //     })
  //     return
  //   }

  //   AdControllerRef.current = window.Adsgram?.init({
  //     blockId,
  //     debug: true,
  //     debugBannerType: 'FullscreenMedia'
  //   })
  // }, [blockId, onError])

  return useCallback(async () => {
    if (AdControllerRef.current) {
      AdControllerRef.current
        .show()
        .then(() => {
          onReward()
        })
        .catch((result: ShowPromiseResult) => {
          onError?.(result)
        })
    } else {
      onError?.({
        error: true,
        done: false,
        state: 'load',
        description: 'Adsgram script not loaded'
      })
    }
  }, [onError, onReward])
}
