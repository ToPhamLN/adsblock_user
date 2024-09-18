import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

type Props = {
  totalPages?: number
}

const Pagination = ({ totalPages = 10 }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: (currentPage + 1).toString() })
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: (currentPage - 1).toString() })
    }
  }

  const handlePageChange = (valueAsString: string, valueAsNumber: number) => {
    console.log(valueAsString)
    if (valueAsNumber >= 1 && valueAsNumber <= totalPages) {
      setSearchParams({ page: valueAsNumber.toString() })
    }
  }

  return (
    <Box>
      <Flex alignItems='center' mt={4} justifyContent='center'>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={goToPreviousPage}
          isDisabled={currentPage === 1}
          aria-label='Previous page'
        />

        <Box mx={4}>
          <NumberInput
            value={currentPage}
            onChange={handlePageChange}
            max={totalPages}
            min={1}
            width='80px'
            allowMouseWheel
          >
            <NumberInputField />
          </NumberInput>
        </Box>

        <IconButton
          icon={<ChevronRightIcon />}
          onClick={goToNextPage}
          isDisabled={currentPage === totalPages}
          aria-label='Next page'
        />
      </Flex>
    </Box>
  )
}

export default Pagination
