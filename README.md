# Hono Server with Mongoose Boilerplate

This project provides a robust boilerplate for building an api server using Hono and Mongoose.

## Features

- **Hono**: A small, simple, and ultrafast web framework for the Edges
- **Mongoose**: Elegant MongoDB object modeling for Node.js
- **TypeScript**: For enhanced developer experience and type safety
- **Bun**: A fast all-in-one JavaScript runtime

## Getting Started

1. Clone the repository:

   Using Git:

   ```
   git clone https://github.com/1baga/hono-mongoose-boilerplate.git
   cd hono-mongoose-boilerplate
   ```

   Using Github CLI:

   ```
   gh repo clone 1baga/hono-mongoose-boilerplate
   ```

2. Copy the `.env.example` file to `.env`:

   For Windows:

   ```
   copy .env.example .env
   ```

   For Linux/macOS:

   ```
   cp .env.example .env
   ```

3. Install dependencies:

   ```
   bun install
   ```

4. Start the development server:

   ```
   bun dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

Source code is located in the `src` directory.

`src/server.ts` is the entry point for the server.

`src/routes` directory contains the routes for the server.

`src/database/index.ts` is the entry point for the database connection.

`src/database/models` directory contains the models for the server.

`src/controllers` directory contains the controller functions for routes.

`src/middleware` directory contains the middleware functions for routes.

`src/utils` directory contains the utility functions that can be used anywhere in the project.

`src/services` directory contains the services route functions.

## Configuration

After copying the `.env.example` file to `.env`, open the `.env` file and update the values according to your environment settings.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Issues

If you encounter any problems or have questions, please open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hono team for their excellent web framework
- Mongoose team for their powerful ODM
- Bun team for their fast JavaScript runtime

Happy coding!
