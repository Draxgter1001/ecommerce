package taf.ecommerce.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import taf.ecommerce.Entity.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
}
