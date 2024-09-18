import React, { useState } from 'react'
import {
  Button,
  Flex,
  Box,
  IconButton,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

type Props = {
  totalPages: number
}

const Pagination = ({ totalPages = 10 }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const handlePageChange = (valueAsString: string, valueAsNumber: number) => {
    if (valueAsNumber >= 1 && valueAsNumber <= totalPages) {
      setCurrentPage(valueAsNumber)
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

        {/* Nút Next */}
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
