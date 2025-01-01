import { Button, ButtonGroup, CardFooter, Icon } from '@chakra-ui/react';
import React from "react";
import { FiChevronsRight, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { usePackageContext } from "../../../store/PackagesContext.jsx";

export default function PackageAction({packages, onOpen}) {
    const { setExcludedName } = usePackageContext();
    const navigate = useNavigate();

    function handleReadMoreClick() {
        navigate(`/package/${packages.id}`);
        setExcludedName(packages.Title);
    };

    function handleUpdateClick() {
        navigate(`/admin/package/${packages.id}`, { state: { packages } });
    }

    return (
        <CardFooter pt={0}>
            <ButtonGroup spacing='6'>
                <Button variant='solid' colorScheme='green' onClick={handleReadMoreClick}>
                    Read more<Icon mt='0.2rem' ml='0.2rem' as={FiChevronsRight} />
                </Button>
                <Button variant='solid' colorScheme='blue' onClick={handleUpdateClick}>
                    <Icon marginRight='0.2rem' as={FiEdit} /><span>Update</span>
                </Button>
                <Button variant='solid' colorScheme='red' onClick={onOpen}>
                    <Icon as={FiTrash2} marginRight='0.1rem' />Delete
                </Button>
            </ButtonGroup>
        </CardFooter>
    );
};