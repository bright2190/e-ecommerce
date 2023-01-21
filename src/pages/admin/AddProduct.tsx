import React from 'react';
import { Button, Flex, Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { TextInput, Textarea } from '@mantine/core';


const AddProduct: React.FC = () => {
    const theme = useMantineTheme();
    return (
        <>
            <div className='add_product'>
                <h3 className='sub_page_header'>Add Products</h3>
                <Flex direction={"column"} gap={20}>
                    <TextInput
                        placeholder="Your name"
                        label="Full name"
                        withAsterisk
                        size={"md"}
                    />
                    <TextInput
                        placeholder="Your name"
                        label="Qty"
                        withAsterisk
                        size={"md"}
                    />
                    <TextInput
                        placeholder="Your name"
                        label="Price"
                        withAsterisk
                        size={"md"}
                    />
                    <Textarea
                        placeholder="Your name"
                        label="Description"
                        withAsterisk
                        size={"md"}
                    />
                    <Dropzone
                        onDrop={(files) => console.log('accepted files', files, URL.createObjectURL(files[0]))}
                        onReject={(files) => console.log('rejected files', files)}
                        maxSize={3 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                    >
                        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                            <Dropzone.Accept>
                                <IconUpload
                                    size={50}
                                    stroke={1.5}
                                    color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                                />
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                                <IconX
                                    size={50}
                                    stroke={1.5}
                                    color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                                />
                            </Dropzone.Reject>
                            <Dropzone.Idle>
                                <IconPhoto size={50} stroke={1.5} />
                            </Dropzone.Idle>

                            <div>
                                <Text size="xl" inline>
                                    Drag images here or click to select files
                                </Text>
                                <Text size="sm" color="dimmed" inline mt={7}>
                                    Attach as many files as you like, each file should not exceed 5mb
                                </Text>
                            </div>
                        </Group>
                    </Dropzone>
                   <div> <Button >Add product</Button></div>
                </Flex>
            </div>
        </>
    );
};

export default AddProduct;
