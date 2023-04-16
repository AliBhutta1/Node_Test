import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('Movies', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('Shows', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Movies',
          key: 'id',
        },
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Rooms',
          key: 'id',
        },
      },
    });

    await queryInterface.createTable('Rooms', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seat_type_premium: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      cinema_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cinemas',
          key: 'id',
        },
      },
    });

    await queryInterface.createTable('Seats', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Rooms',
          key: 'id',
        },
      },
      seat_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seat_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    await queryInterface.createTable('Bookings', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      show_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Shows',
          key: 'id',
        },
      },
      seat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Seats',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('Bookings');
    await queryInterface.dropTable('Seats');
    await queryInterface.dropTable("Movies");
    await queryInterface.dropTable("Users");
  }
};
