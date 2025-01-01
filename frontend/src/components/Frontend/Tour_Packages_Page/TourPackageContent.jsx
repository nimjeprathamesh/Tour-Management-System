import { Box, Card, CardBody, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { usePackageContext } from '../../../store/PackagesContext';
import { currencyFormatter } from '../../../util/formatting';
import './TourPackage.css';

export default function TourPackageContent({packages}) {
    const { setExcludedName } = usePackageContext();

    function handleReadMoreClick() {
        setExcludedName(packages.Title);
    };

    return (
        <Link to={`../package/${packages.id}`} onClick={handleReadMoreClick}>
            <Card maxW='sm' className='inner-box' p={0} overflow='hidden'>
                <CardBody p={0} overflow='hidden'>
                    <Box className="inner-image-overlay">
                        <Image src={packages.Image} borderTopRadius='lg' />
                        <Box className="inner-overlay"></Box>
                    </Box>
                    <Stack p={4} spacing='3'>
                        <Heading size='md' className='heading' m={0}>{packages.Title}</Heading>
                        <Text m={0}>
                            <Icon as={MdLocationPin} position='relative' bottom='0.1rem' color='#f41844' />
                            {packages.Location}
                        </Text>
                        <Text className="para">{packages.Details}</Text>
                        <Flex justifyContent='space-between'>
                            <Text>{packages.Duration}</Text>
                            <Text>{currencyFormatter.format(packages.Price)}</Text>
                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
}