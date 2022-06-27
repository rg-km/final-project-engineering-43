import {
  Button,
  Container,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react';
import Footer from '../../component/Footer';
import { Link as ReactLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRoadmapStore from '../../store/roadmapStore';
import { getAllRoadmap } from '../../services/roadmapApi';
import shalow from 'zustand/shallow';
import useCoursesStore from '../../store/coursesStore';
import { getAllCourses } from '../../services/coursesApi';

/**
 * Halaman Dashboard teacher
 * Halaman ini digunaakan untuk mengelola materi yang di buat teacher
 */

export default function Teacher() {
  const [tabIndex, setTabIndex] = useState(0);
  const [roadmap, setRoadmap] = useState();
  const [courses, setCourses] = useState();
  const { setRoadmaps, roadmaps, getRoadmap } = useRoadmapStore(
    (state) => ({
      setRoadmaps: state.setRoadmaps,
      roadmaps: state.roadmaps,
      getRoadmap: state.getRoadmap,
    }),
    shalow
  );

  const { coursesState, setCoursesState, filteredCoursesState } =
    useCoursesStore((state) => ({
      coursesState: state.courses,
      setCoursesState: state.setCourses,
      filteredCoursesState: state.filtered,
    }));

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchRoadmap = async () => {
      const { error, response } = await getAllRoadmap();
      if (error) {
        console.log(error);
      }
      setRoadmaps(response.data);
    };
    const fetchCourses = async () => {
      const { error, response } = await getAllCourses();
      if (error) {
        console.log(error);
      }
      setCoursesState(response.data);
    };
    fetchCourses();
    fetchRoadmap();
  }, [setRoadmaps, setCoursesState]);

  useEffect(() => {
    const viewParams = searchParams.get('view');
    if (viewParams === 'courses') {
      const idParams = searchParams.get('courses-id');
      if (idParams) {
        const { courses, roadmap } = filteredCoursesState(getRoadmap(idParams));
        setCourses(courses);
        setRoadmap(roadmap);
        setTabIndex(1);
      }
    } else {
      setRoadmap();
      setCourses(coursesState);
      setTabIndex(0);
    }
  }, [searchParams]);

  return (
    <>
      <Container maxW="container.xl" my={16} minH="100vh">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" fontSize="24px" mb="16px">
            Teacher Dashboard
          </Heading>
          <Button as={ReactLink} to={buttonContent[tabIndex].link}>
            {buttonContent[tabIndex].label}
          </Button>
        </HStack>

        <Tabs index={tabIndex} onChange={(i) => setTabIndex(i)}>
          <TabList>
            <Tab as={ReactLink} to="?view=roadmap">
              Roadmap
            </Tab>
            <Tab as={ReactLink} to="?view=courses">
              Courses
            </Tab>
          </TabList>

          <TabPanels mt={8}>
            <TabPanel p={0}>
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th isNumeric>No</Th>
                      <Th>Title</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {roadmaps &&
                      roadmaps.map((item, i) => (
                        <Tr key={item.id}>
                          <Td isNumeric>{i + 1}</Td>
                          <Td>{item.title}</Td>
                          <Td>{item.status}</Td>
                          <Td>
                            <Flex>
                              <Button
                                mr={10}
                                bgColor={'white'}
                                color={'teal.300'}
                                as={ReactLink}
                                to={`?view=courses&courses-id=${item.id}`}
                              >
                                Detail
                              </Button>
                              <Button
                                mr={10}
                                bgColor={'white'}
                                color={'teal.300'}
                                as={ReactLink}
                                to={`${item.id}/edit-profesi`}
                              >
                                Edit
                              </Button>
                              <Button bgColor={'white'} color={'red'}>
                                Delete
                              </Button>
                            </Flex>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel p={0}>
              {roadmap && (
                <Box mb="8">
                  <Heading mb="4" as="h2">
                    {roadmap.title}
                  </Heading>
                  <Text mb="4">{roadmap.description}</Text>
                  <Text color="gray.500">
                    Materi yang akan di pelajari jika ingin menjadi{' '}
                    {roadmap.title}
                  </Text>
                </Box>
              )}
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th isNumeric>No</Th>
                      <Th>Title</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {courses &&
                      courses.map((course, i) => (
                        <Tr key={i}>
                          <Td isNumeric>{i + 1}</Td>
                          <Td>{course.title}</Td>
                          <Td>{course.status}</Td>
                          <Td>
                            <Flex>
                              <Button
                                mr={10}
                                bgColor={'white'}
                                color={'teal.300'}
                              >
                                Detail
                              </Button>
                              <Button
                                mr={10}
                                bgColor={'white'}
                                color={'teal.300'}
                              >
                                Edit
                              </Button>
                              <Button bgColor={'white'} color={'red'}>
                                Delete
                              </Button>
                            </Flex>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Footer />
    </>
  );
}

const buttonContent = [
  {
    label: 'Tambah Roadmap',
    link: 'tambah-profesi',
  },
  {
    label: 'Tambah Materi',
    link: 'tambah-materi',
  },
];
