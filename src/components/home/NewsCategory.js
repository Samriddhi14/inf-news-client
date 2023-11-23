// NewsCategory.js
import React, { useState, useEffect } from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchNewsData } from '../api/newsApi'; // Adjust the path based on your project structure

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const categories = [
    { id: 1, type: "International" },
    { id: 2, type: "National" },
    { id: 3, type: "Technology" },
    { id: 4, type: "Entertainment" },
    { id: 5, type: "Sports" }
];

const NewsCategory = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || '';
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews(selectedCategory);
    }, [selectedCategory]);

    const fetchNews = async (category) => {
        const newsData = await fetchNewsData(category);
        setNews(newsData);
    };

    return (
        <>
            <Link to={`/create?category=${selectedCategory || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Breaking Today</StyledButton>
            </Link>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"} onClick={() => setSelectedCategory('')}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell>
                                <StyledLink to={`/?category=${category.type}`} onClick={() => setSelectedCategory(category.type)}>
                                    {category.type}
                                </StyledLink>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>

            <div>
                {news.map((article) => (
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        {/* Add more details as needed */}
                    </div>
                ))}
            </div>
        </>
    );
};

export default NewsCategory;
