# Nike Product Scraper

A Python-based web scraper designed to extract Nike shoe details from Nike's API and store them in a MySQL database. This tool helps in gathering information about shoes, including their pricing, colors, and other relevant data.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [License](#license)

## Features

- Scrapes product information specifically for shoes.
- Handles duplicate entries to avoid redundancy in the database.
- Configurable to scrape a specified number of pages.
- Stores scraped data in a MySQL database.

## Requirements

- Python 3.9 or higher
- MySQL Server
- Required Libraries: Check the `requirements.txt` file for the complete list.

To install the required libraries, run:

```bash
pip install -r requirements.txt
```

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/shivraj-prajapati/nike-shoes-scraper.git
   ```

2. Navigate to the project directory:

   ```bash
    cd nike-shoes-scraper
   ```

3. Install the required Python packages (if not already installed).

## Configuration

Before running the scraper, you need to configure the database settings in the script:

1. Open the `scraper.py` file.
2. Update the following variables:

   ```python
   DATABASE_NAME = "Enter Your Database Name"
   USER_NAME = "root"  # Change according to your MySQL username
   PASSWORD = "Enter Your Password here"
   ```

## Usage

To start scraping data, run the following command in your terminal:

```bash
python scraper.py
```

You can modify the number of pages to scrape by changing the `pages` argument in the `process` function call at the bottom of the script:

```python
process(pages=10)  # Change 10 to the number of pages you want to scrape
```

## Database Schema

The scraper creates a `products` table with the following schema:

| Column Name          | Data Type      | Description                                   |
|---------------------|----------------|-----------------------------------------------|
| `id`                | Integer        | Primary key, auto-incremented                 |
| `title`             | String(255)    | Title of the product                          |
| `sub_title`         | String(255)    | Subtitle of the product                       |
| `color`             | String(100)    | Color of the product                          |
| `color_description` | String(255)    | Description of the color                      |
| `current_price`     | String(50)     | Current price of the product                  |
| `initial_price`     | String(50)     | Initial price of the product                  |
| `discount_percentage`| DECIMAL(5, 2) | Discount percentage (if applicable)           |
| `product_url`       | String(768)    | URL to the product's page                     |
| `image_url`         | Text           | URL of the product image                      |

