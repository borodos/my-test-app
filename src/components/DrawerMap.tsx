import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
	useDisclosure,
	forwardRef,
	DrawerProps,
	Button,
} from "@chakra-ui/react";

import React from "react";

interface Props {}

export const DrawerMap = forwardRef<DrawerProps, "div">((props, ref) => {
	const {} = props;

	return (
		<Drawer isOpen={true} placement="right" onClose={() => null}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Create your account</DrawerHeader>

				<DrawerBody>
					<Input placeholder="Type here..." />
				</DrawerBody>

				<DrawerFooter>
					<Button
						variant="outline"
						mr={3}
						// onClick={onClose}
					>
						Cancel
					</Button>
					<Button colorScheme="blue">Save</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
});
