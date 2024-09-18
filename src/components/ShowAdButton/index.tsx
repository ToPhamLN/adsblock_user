import { useCallback, ReactElement } from 'react'
import { useAdsgram } from '~/hooks/useAdsgram.ts'
import { ShowPromiseResult } from '~/types/adsgram'

export function ShowAdButton(): ReactElement {
  const onReward = useCallback(() => {
    alert('Reward')
  }, [])
  const onError = useCallback((result: ShowPromiseResult) => {
    alert(JSON.stringify(result, null, 4))
  }, [])

  const showAd = useAdsgram({
    blockId: import.meta.env.VITE_BLOCK_ID,
    onReward,
    onError
  })

  return (
    <button className='btn' onClick={showAd}>
      Show Ad
    </button>
  )
}
